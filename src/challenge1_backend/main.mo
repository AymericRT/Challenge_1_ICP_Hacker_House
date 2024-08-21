actor {
  // A constant variable to store the name
  private var storedName : Text = "Initiialized Storage";

  // Query function to retrieve the stored name
  public query func greet() : async Text {
    return " " # storedName # "";
  };

  // Update function to update the stored name
  public func updateName(newName : Text) : async Text {
    storedName := newName;
    return "Name updated to: " # newName;
  };
}
