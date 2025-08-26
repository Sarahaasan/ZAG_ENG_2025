const Card = ({ Products }) => {
  return (
    <>
      {Products.map((item, index) => (
        <div
           key={index}
  style={{
    width: "300px",
    height: "fit-content",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "12px",
  }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "140px",
              borderRadius: "6px"
            }}
          />
          <h2 style={{ fontSize: "1.1rem", margin: "10px 0 6px" }}>{item.title}</h2>
          <p style={{ color: "#888", margin: "4px 0" }}>Product: {index+1}</p>
          <p style={{ fontWeight: "bold", margin: "4px 0" }}>Price: ${item.price}</p>
        </div>
      ))}
    </>
  );
};
export default Card;