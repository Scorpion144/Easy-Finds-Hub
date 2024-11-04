import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { useForm } from 'react-hook-form';
import { Eye, Save } from 'lucide-react';
import RichTextEditor from '../components/RichTextEditor';
import ImageUpload from '../components/ImageUpload';
import ArticlePreview from '../components/ArticlePreview';

interface ArticleForm {
  title: string;
  content: string;
  category: string;
  excerpt: string;
  tags: string;
}

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const AddArticle = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ArticleForm>();
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [content, setContent] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

    const removeImage = () => {
      setImage(null);
      setImagePreview('');
    };

    const onSubmit = async (data: ArticleForm) => {
      try {
        setIsSubmitting(true);
        let imageUrl = '';
        
        if (image) {
          const storageRef = ref(storage, `articles/${Date.now()}-${image.name}`);
          await uploadBytes(storageRef, image);
          imageUrl = await getDownloadURL(storageRef);
        }

        const tags = data.tags.split(',').map(tag => tag.trim());

        await addDoc(collection(db, 'articles'), {
          ...data,
          content,
          imageUrl,
          tags,
          createdAt: new Date().toISOString(),
        });

        reset();
        setContent('');
        setImage(null);
        setImagePreview('');
        alert('Article published successfully!');
      } catch (error) {
        console.error('Error publishing article:', error);
        alert('Error publishing article. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add New Article</h2>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                {...register('title', { 
                  required: 'Title is required',
                  minLength: { value: 10, message: 'Title must be at least 10 characters' }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="home-decor">Home Decor</option>
                <option value="travel-deals">Travel Deals</option>
                <option value="home-appliances">Home Appliances</option>
                <option value="garden-planting">Garden Planting</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Excerpt</label>
              <textarea
                {...register('excerpt', { 
                  required: 'Excerpt is required',
                  maxLength: { value: 160, message: 'Excerpt must be less than 160 characters' }
                })}
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.excerpt && (
                <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <input
                {...register('tags', { required: 'At least one tag is required' })}
                placeholder="Enter tags separated by commas"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.tags && (
                <p className="mt-1 text-sm text-red-600">{errors.tags.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Featured Image</label>
              <ImageUpload
                imagePreview={imagePreview}
                onImageChange={handleImageChange}
                onRemoveImage={removeImage}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <RichTextEditor content={content} onChange={setContent} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Publishing...' : 'Publish Article'}
            </button>
          </form>

          {showPreview && (
            <ArticlePreview
              title={watch('title')}
              content={content}
              tags={watch('tags')}
              excerpt={watch('excerpt')}
              imagePreview={imagePreview}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </Link>
              <Link
                to="/dashboard/add"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Add Article
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-bold text-center">Welcome to Dashboard</h1>} />
          <Route path="/add" element={<AddArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;