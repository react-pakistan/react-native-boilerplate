export interface IDrawerContentProps {
  /**
   *
   */
  banner : string;
  /**
   *
   */
  descriptors : Record<string, unknown>;
  /**
   *
   */
  navigation : {
    /**
     *
     */
    navigate : (s : string) => void;
  };
}
