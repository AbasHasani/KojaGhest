import Article from "./article";

const Page = async () => {
  return (
    <div>
      <h1 className="text-center border-info p-3 mb-8">آموزش</h1>
      <div className="grid grid-cols-2 gap-3">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Article name={"مقاله" + i} key={i} image={`/p${i + 1}.jpg`} />
          ))}
      </div>
    </div>
  );
};

export default Page;
