export default function Hashtag({ hashtag }: { hashtag: string }) {
    // TODO: Add a funny hashtag search
    return (
        <div className="inline-block px-1 border-2 border-black rounded-lg dark:border-[#ececec]">
            #{hashtag}
        </div>
    );
}
