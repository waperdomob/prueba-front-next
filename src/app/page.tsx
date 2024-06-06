import PostTable from "./components/posts.table";

export default function Page() {
    return (
    <div className="container">
        <h1 className="text-center text-2xl font-bold mb-4">Lista de Post</h1>
        <PostTable  />
    </div>
    );
}