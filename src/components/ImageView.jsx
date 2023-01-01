function ImageView({ url, className, alt }) {
  return (
    <div className={className}>
      <img src={url} alt={alt} />
    </div>
  );
}

export default ImageView;
