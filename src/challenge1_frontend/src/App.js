import { html, render } from 'lit-html';
import { challenge1_backend } from 'declarations/challenge1_backend';

class App {
  storedName = '';
  storedNumber = 0;

  constructor() {
    this.#fetchStoredData();
    this.#render();
  }

  // Fetch the stored name and number from the backend when the page loads
  #fetchStoredData = async () => {
    this.storedName = await challenge1_backend.readText();
    this.storedNumber = await challenge1_backend.readNumber();
    this.#render();
  };

  // Handle the form submission to update the stored name
  #handleSubmit = async (e) => {
    e.preventDefault();
    const newName = document.getElementById('name').value;
    await challenge1_backend.updateName(newName);
    this.storedName = await challenge1_backend.readText(); // Fetch the updated name
    this.#render();
  };

  // Handle the button click to increment the number
  #handleIncrement = async () => {
    this.storedNumber = await challenge1_backend.increment();
    this.#render();
  };

  // Render the UI
  #render() {
    let body = html`
      <div style="text-align: center; margin-top: 50px;">
        <h1>Storing Text and Number</h1>
        <p>Stored Text: ${this.storedName}</p>
        <p>Stored Number: ${this.storedNumber}</p>
        <form action="#">
          <label for="name">Enter a new text: &nbsp;</label>
          <input id="name" type="text" />
          <button type="submit">Update Text</button>
        </form>
        <br />
        <button @click=${this.#handleIncrement}>Increment Number</button>
      </div>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
      .addEventListener('submit', this.#handleSubmit);
  }
}

export default App;
