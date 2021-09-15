class SearchResult {
	$searchResult = null;
	data = null;
	onClick = null;
	loading = false;
  
	constructor({ $target, initialData, onClick }) {
	  this.$searchResult = document.createElement("div");
	  this.$searchResult.className = "SearchResult";
	  $target.appendChild(this.$searchResult);
  
	  this.data = initialData;
	  this.onClick = onClick;
  
	  this.render();
	}
  
	setState(nextData) {
	  this.data = nextData.data;
	  this.loading = nextData.loading;
	  this.render();
	}
  
	render() {
	  if (this.loading) {
	  this.$searchResult.innerHTML = this.data
		.map(
		  cat => `
			<div class="item">
			  <img src=${cat.url} alt=${cat.name} />
			</div>
		  `
		)
		.join("");
		if (this.data.length == 0) {
		  this.$searchResult.innerHTML = `<h2>검색 결과가 없습니다</h2>`
		}
  
	  this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
		$item.addEventListener("click", () => {
		  this.onClick(this.data[index]);
		});
	  });
	  } else if (!this.loading && this.data === null) {
		this.$searchResult.innerHTML=`<h3> Loading... </h3>`
	  } else if (!this.loading && this.data === []) {
		this.$searchResult.innerHTML=``
	  }
	}
  }
  