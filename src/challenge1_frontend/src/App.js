import { html, render } from 'lit-html';
import { challenge1_backend } from 'declarations/challenge1_backend';

class App {
  storedName = '';

  constructor() {
    this.#fetchStoredName();
    this.#render();
  }

  // Fetch the stored name from the backend when the page loads
  #fetchStoredName = async () => {
    this.storedName = await challenge1_backend.greet();
    this.#render();
  };

  // Handle the form submission to update the stored name
  #handleSubmit = async (e) => {
    e.preventDefault();
    const newName = document.getElementById('name').value;
    await challenge1_backend.updateName(newName);
    this.storedName = await challenge1_backend.greet(); // Fetch the updated name
    this.#render();
  };

  // Render the UI
  #render() {
    let body = html`
      <div style="text-align: center; margin-top: 50px;">
        <h1>Storing a text in the storage varaible</h1>
        <p>Storage Variable: ${this.storedName}</p>
        <form action="#">
          <label for="name">Enter a new text: &nbsp;</label>
          <input id="name" type="text" />
          <button type="submit">Update text</button>
        </form>
      </div>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
      .addEventListener('submit', this.#handleSubmit);
  }
}

export default App;
