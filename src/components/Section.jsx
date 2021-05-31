import Button from "./Button";

const Section = (props) => {
  const ButtonPrimaryContent = props.productName.includes("Solar")
    ? "ORDER NOW"
    : "CUSTOM ORDER";

  const ButtonSecondaryContent = props.productName.includes("Solar")
    ? "LEARN MORE"
    : "EXISTING INVENTORY";

  return (
    <section
      id={props.id}
      className={`w-screen h-screen flex flex-col static bg-${props.product} bg-cover bg-center`}
    >
      <div className="flex-col flex-grow items-center pt-36 text-center">
        <h1 className="text-5xl text-center font-regular mb-2">
          {props.productName}
        </h1>
        <h2 className="text-base font-light">{props.productDescription}</h2>
      </div>

      {props.accessories ? (
        <div className="flex flex-col relative w-screen bottom-12 items-center md:bottom-16 md:flex-row justify-center">
          <Button content="SHOP NOW" background="DARK" />
        </div>
      ) : (
        <div className="flex flex-col relative w-screen bottom-12 items-center md:bottom-16 md:flex-row justify-center">
          <Button content={ButtonPrimaryContent} background="DARK" />
          <Button content={ButtonSecondaryContent} background="LIGHT" />
        </div>
      )}

      {/* Shows arrow svg only on the first section */}
      {props.firstSection && (
        <div className="flex absolute w-screen bottom-4 md:bottom-6 justify-center my-1 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Section;
