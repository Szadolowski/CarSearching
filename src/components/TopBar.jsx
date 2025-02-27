import PropTypes from "prop-types";

let Burger = () => {
  return <div className="bg-black h-1"></div>;
};

let LoginBox = ({ children }) => {
  return <div className="border-[1px] border-red-500 font-bold rounded-xl p-1.5">{children}</div>;
};
LoginBox.propTypes = {
  children: PropTypes.node,
};

let TopBar = () => {
  return (
    <div className="w-full flex flex-row justify-between shadow-2xl h-12 py-2.5 px-3 items-center">
      <div className=" flex flex-col justify-between w-8 h-6">
        <Burger></Burger>
        <Burger></Burger>
        <Burger></Burger>
      </div>
      <div> Logo </div>
      <div className="flex flex-row space-x-5">
        <LoginBox>Rejestracja</LoginBox>
        <LoginBox>Logowanie</LoginBox>
      </div>
    </div>
  );
};

export default TopBar;
