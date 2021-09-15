const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.className = "random-button";
    this.$randomButton.innerText = "Random Button";
    $target.appendChild($randomButton);

    const $darkmodeButton = document.createElement('input');
    this.$darkmodeButton = $darkmodeButton;
    this.$darkmodeButton.className = "darkmode";
    this.$darkmodeButton.setAttribute('type','checkbox');
    this.$darkmodeButton.setAttribute('value','darkmode');
    $target.appendChild($darkmodeButton);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    $randomButton.addEventListener("click", e => {
      onRandomSearch();
    })

    $darkmodeButton.addEventListener('click', e => {
      if (e.target.checked) {
        document.documentElement.setAttribute('color-theme', 'dark');
      } else {
        document.documentElement.setAttribute('color-theme', 'light');
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
