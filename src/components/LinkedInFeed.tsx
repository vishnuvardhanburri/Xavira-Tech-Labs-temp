import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  ExternalLink, 
  MoreHorizontal, 
  Globe, 
  Award, 
  CheckCircle,
  Copy,
  Plus
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  role: string;
  avatar: string;
  text: string;
  time: string;
}

interface Post {
  id: string;
  author: string;
  role: string;
  avatar: string;
  time: string;
  content: string;
  tags: string[];
  image?: string;
  initialLikes: number;
  initialCommentsCount: number;
  comments: Comment[];
}

const SAMPLE_POSTS: Post[] = [
  {
    id: "post-1",
    author: "Vishnu Vardhan Burri",
    role: "CEO & Chief Systems Architect | Toptal Vetted Architect",
    avatar: "https://github.com/vishnuvardhanburri.png",
    time: "2 days ago",
    content: "Why do so many microservice scaling strategies fall flat? \n\nIn 90% of architectural audits we perform, database socket exhaustion is the silent killer. Engineering teams add horizontal replicas to their application tier, only to find the database connection pool is completely starved under spike load.\n\nAdding pgBouncer in transaction pooling mode or implementing a custom high-performance sequence ring is frequently the difference between a 504 Gateway Timeout and stable sub-2ms response latency.\n\nWe mapped this complete remediation cycle in our latest Enterprise Intelligence Audit. Stop guessing your scaling limits—let passive eBPF tracers tell you the mathematical truth.",
    tags: ["#systemsengineering", "#distributedarchitecture", "#databasescaling", "#toptal"],
    initialLikes: 248,
    initialCommentsCount: 34,
    comments: [
      {
        id: "c1-1",
        author: "Sarah Jenkins",
        role: "CTO at FinScale Group",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        text: "Spot on, Vishnu. Transaction pooling is almost always overlooked until the system buckles. Excellent write-up on eBPF passive probing.",
        time: "1 day ago"
      },
      {
        id: "c1-2",
        author: "Marcus Chen",
        role: "Principal Infrastructure Lead",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
        text: "Have you guys tried combining this with Karpenter autoscaling to shift the node count dynamically? Interested to hear your thoughts.",
        time: "18 hours ago"
      }
    ]
  },
  {
    id: "post-2",
    author: "Vishnu Vardhan Burri",
    role: "CEO & Chief Systems Architect | Toptal Vetted Architect",
    avatar: "https://github.com/vishnuvardhanburri.png",
    time: "1 week ago",
    content: "If you are paying for unused database vCPUs and idle staging containers, you are falling into the classic over-provisioning trap.\n\nDuring a recent cloud-spend audit for an EMEA SaaS partner, we found they were spending £14,200/month on over-allocated Kubernetes requests. By tuning their horizontal pod autoscaler bounds and configuring spot instances dynamically via Karpenter, we slashed their monthly cloud bill by 43%—without losing a single millisecond of query performance.\n\nResource governance isn't a post-launch afterthought. It belongs directly in your IaC (Terraform) files.",
    tags: ["#finops", "#devops", "#kubernetes", "#cloudcosts"],
    initialLikes: 194,
    initialCommentsCount: 22,
    comments: [
      {
        id: "c2-1",
        author: "Devon Reynolds",
        role: "SRE Director",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
        text: "A 43% reduction is huge. Staged environments are notoriously wasteful. Standardizing spot schedules is an absolute necessity.",
        time: "5 days ago"
      }
    ]
  },
  {
    id: "post-3",
    author: "Vishnu Vardhan Burri",
    role: "CEO & Chief Systems Architect | Toptal Vetted Architect",
    avatar: "https://github.com/vishnuvardhanburri.png",
    time: "2 weeks ago",
    content: "Security is not a checklist item you pass to a third-party auditor on a yearly retainer. It must be built cryptographically into your database engine levels.\n\nFor enterprise SaaS and FinTech platforms, row-level security (RLS) is your ultimate shield. In multi-tenant environments, relying solely on application-layer isolation is a severe risk vector. By implementing secure row policies directly within PostgreSQL or Spanner, you ensure that even under zero-day API exploits, customer isolation remains cryptographically preserved.",
    tags: ["#cybersecurity", "#database", "#saas", "#compliance"],
    initialLikes: 312,
    initialCommentsCount: 45,
    comments: [
      {
        id: "c3-1",
        author: "Elena Rostov",
        role: "Head of Security at ApexLedger",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        text: "Fully agree on Row-Level Security. It transfers the security responsibility back to the engine where it belongs. Excellent advice, Vishnu.",
        time: "1 week ago"
      }
    ]
  }
];

export default function LinkedInFeed() {
  const [posts, setPosts] = useState<Post[]>(SAMPLE_POSTS);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [activeCommentsPostId, setActiveCommentsPostId] = useState<string | null>(null);
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const handleLike = (postId: string) => {
    const isLiked = likedPosts.has(postId);
    const updatedLiked = new Set(likedPosts);
    
    if (isLiked) {
      updatedLiked.delete(postId);
    } else {
      updatedLiked.add(postId);
    }
    setLikedPosts(updatedLiked);

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          initialLikes: isLiked ? p.initialLikes - 1 : p.initialLikes + 1
        };
      }
      return p;
    }));
  };

  const handleCopyLink = (postId: string) => {
    const shareUrl = `https://www.linkedin.com/in/vishnuvardhanburri/`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedPostId(postId);
      setTimeout(() => setCopiedPostId(null), 2000);
    });
  };

  const handleAddComment = (postId: string) => {
    const commentText = newComments[postId]?.trim();
    if (!commentText) return;

    const newComment: Comment = {
      id: `new-comment-${Date.now()}`,
      author: "You (Sovereign Visitor)",
      role: "System Observer / Tech Partner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
      text: commentText,
      time: "Just now"
    };

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, newComment],
          initialCommentsCount: p.initialCommentsCount + 1
        };
      }
      return p;
    }));

    setNewComments(prev => ({
      ...prev,
      [postId]: ""
    }));
  };

  return (
    <div className="bg-[#05070c]/50 border border-zinc-900 rounded-xl p-6 lg:p-8 space-y-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      
      {/* LinkedIn Channel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#0077b5]/10 border border-[#0077b5]/20 rounded-lg text-[#0077b5]">
            <Linkedin className="w-5 h-5 filter drop-shadow-[0_0_6px_rgba(0,119,181,0.3)]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-light text-white uppercase tracking-wider">
              Leadership LinkedIn Communications
            </h3>
            <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              12,480+ ENGAGED SUBSCRIBERS ACTIVE
            </p>
          </div>
        </div>
        
        <a 
          href="https://www.linkedin.com/in/vishnuvardhanburri/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 font-mono text-[10px] text-[#0077b5] bg-[#0077b5]/10 hover:bg-[#0077b5]/15 border border-[#0077b5]/30 hover:border-[#0077b5]/80 rounded-md tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer"
        >
          Follow channel
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => {
          const isLiked = likedPosts.has(post.id);
          const showComments = activeCommentsPostId === post.id;

          return (
            <div 
              key={post.id}
              className="bg-[#04060b] border border-zinc-900/80 rounded-lg p-5 space-y-4 hover:border-zinc-800 transition-colors duration-200"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 shrink-0">
                    <img 
                      src={post.avatar} 
                      alt={post.author} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                        {post.author}
                      </h4>
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                    <p className="text-[10px] text-zinc-500 leading-tight font-mono font-light max-w-md sm:max-w-lg lg:max-w-2xl">
                      {post.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-mono">
                      <span>{post.time}</span>
                      <span>•</span>
                      <Globe className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <button className="text-zinc-600 hover:text-zinc-400 p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-light whitespace-pre-wrap font-sans">
                {post.content}
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-[#0077b5] hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Reaction count bar */}
              <div className="flex items-center justify-between border-t border-b border-zinc-900/60 py-2.5 text-[10px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="p-1 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/30">
                    <ThumbsUp className="w-2.5 h-2.5 text-[#0077b5]" />
                  </span>
                  <span><strong className="text-zinc-400">{post.initialLikes}</strong> professionals</span>
                </div>
                <button 
                  onClick={() => setActiveCommentsPostId(showComments ? null : post.id)}
                  className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-[9px] cursor-pointer"
                >
                  {post.initialCommentsCount} comments
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex-1 py-2 rounded font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                    isLiked 
                      ? 'text-[#0077b5] bg-[#0077b5]/10 font-bold border border-[#0077b5]/20' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40 border border-transparent'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Like</span>
                </button>

                <button
                  onClick={() => setActiveCommentsPostId(showComments ? null : post.id)}
                  className={`flex-1 py-2 rounded font-mono text-[10px] tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                    showComments 
                      ? 'text-cyan-400 bg-cyan-950/10 border border-cyan-500/10' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40 border border-transparent'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Comment</span>
                </button>

                <button
                  onClick={() => handleCopyLink(post.id)}
                  className="flex-1 py-2 rounded font-mono text-[10px] tracking-wider uppercase text-zinc-400 hover:text-white hover:bg-zinc-900/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPostId === post.id ? (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

              {/* Dynamic Comments Section */}
              <AnimatePresence>
                {showComments && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-zinc-900/80 pt-4 mt-2 space-y-4"
                  >
                    {/* Add Comment input */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
                          alt="Your avatar" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="Add a systems-oriented comment..."
                          value={newComments[post.id] || ''}
                          onChange={(e) => setNewComments(prev => ({ ...prev, [post.id]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleAddComment(post.id);
                          }}
                          className="flex-1 bg-zinc-950 border border-zinc-900 rounded-md px-3 py-1.5 text-xs text-white outline-none focus:border-cyan-500/30 transition-all placeholder:text-zinc-600"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="px-3 bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-mono text-[10px] font-bold rounded uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-3.5">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3 bg-zinc-950/40 border border-zinc-900/40 p-3 rounded-lg">
                          <div className="w-7 h-7 rounded-full overflow-hidden border border-zinc-800 shrink-0">
                            <img 
                              src={comment.avatar} 
                              alt={comment.author} 
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-baseline gap-1.5">
                              <span className="text-xs font-bold text-white uppercase tracking-wide">{comment.author}</span>
                              <span className="text-[8px] font-mono text-zinc-500">{comment.role}</span>
                              <span className="text-[8px] font-mono text-zinc-600 font-light">• {comment.time}</span>
                            </div>
                            <p className="text-xs text-zinc-400 font-light font-sans leading-relaxed">
                              {comment.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

    </div>
  );
}
