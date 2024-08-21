actor {
  // Variables to store the name and number
  private var storedName : Text = "Initialized Storage";
  private var storedNumber : Nat = 0;

  // Query function to retrieve the stored name
  public query func readText() : async Text {
    return storedName;
  };

  // Query function to retrieve the stored number
  public query func readNumber() : async Nat {
    return storedNumber;
  };

  // Update function to update the stored name
  public func updateName(newName : Text) : async Text {
    storedName := newName;
    return "Name updated to: " # newName;
  };

  // Function to increment the stored number
  public func increment() : async Nat {
    storedNumber := storedNumber + 1;
    return storedNumber;
  }
}
