const useFixedPrice = (produto) => {
  let fixedPrice = "";

  if (produto) {
    produto.filter((instrumento) => {
      const productPrice = instrumento.price.toString();
      const priceArray = productPrice.split("");

      //Ultimos dois numeros
      const lastNumbers = priceArray.splice(productPrice.length - 2);
      priceArray.push(",");

      const fixedPriceArr = priceArray.concat(lastNumbers);

      return (fixedPrice = fixedPriceArr.join(""));
    });
  }
  return [fixedPrice];
};

export default useFixedPrice;
