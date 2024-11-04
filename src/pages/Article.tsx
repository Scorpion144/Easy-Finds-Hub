import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, User, Calendar, Tag } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import { collection, addDoc, query, where, orderBy, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const Article = () => {
  const { category, slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleRef = doc(db, 'articles', slug!);
        const articleDoc = await getDoc(articleRef);
        if (articleDoc.exists()) {
          setArticle({ id: articleDoc.id, ...articleDoc.data() });
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const commentsQuery = query(
          collection(db, 'comments'),
          where('articleId', '==', slug),
          orderBy('createdAt', 'desc')
        );
        const commentsSnapshot = await getDocs(commentsQuery);
        const commentsList = commentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Comment));
        setComments(commentsList);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    if (slug) {
      fetchArticle();
      fetchComments();
    }
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'comments'), {
        articleId: slug,
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toISOString()
      });
      setNewComment({ author: '', content: '' });
      // Refresh comments
      const commentsQuery = query(
        collection(db, 'comments'),
        where('articleId', '==', slug),
        orderBy('createdAt', 'desc')
      );
      const commentsSnapshot = await getDocs(commentsQuery);
      const commentsList = commentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Comment));
      setComments(commentsList);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${article.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(article.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                {article.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n').map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <NewsletterSignup />
    </div>
  );
};

export default Article;