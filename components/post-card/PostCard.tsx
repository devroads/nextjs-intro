import Link from "next/link";

type PostData = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    section: string;
}
type PostCardProps = {
    post: PostData;
}
const PostCard = ({post}: PostCardProps) => {
    return (
        <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt=""/>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        {post.section}
                    </p>
                    <Link href={`/lessons/${post.id}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PostCard