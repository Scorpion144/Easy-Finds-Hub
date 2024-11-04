import React from 'react';

interface ArticlePreviewProps {
  title: string;
  content: string;
  tags: string;
  excerpt: string;
  imagePreview: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  content,
  tags,
  excerpt,
  imagePreview,
}) => {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Preview</h3>
      <div className="prose max-w-none">
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="rounded-lg mb-4" />
        )}
        <h1>{title || 'Article Title'}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.split(',').map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2 py-1 rounded text-sm"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
        <p className="text-gray-600 italic">{excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default ArticlePreview;