const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="w-full min-h-screen flex-center ">{children}</div>;
};

export default RootLayout;
