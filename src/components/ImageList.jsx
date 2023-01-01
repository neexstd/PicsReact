import ImageView from "./ImageView";

function ImageList({ list }) {
  console.log(list);
  const listOfPics = list.map((image) => {
    return (
      <ImageView
        key={image.id}
        url={image.urls.full}
        alt={image.alt_description}
        className="mb-4"
      />
    );
  });
  return (
    <div className="columns-4 gap-4 mt-20 container mx-auto">{listOfPics}</div>
  );
}

export default ImageList;
