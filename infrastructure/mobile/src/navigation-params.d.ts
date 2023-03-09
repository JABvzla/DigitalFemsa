type RootStackParams = {
  Home: undefined;
  Details: { transaction: Transaction };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace ReactNavigation {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface RootParamList extends RootStackParams {}
}
