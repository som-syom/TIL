class ImageInfo {
	$imageInfo = null;
	data = null;
  exData = null;
  
	constructor({ $target, data, exData }) {
	  const $imageInfo = document.createElement("div");
	  $imageInfo.className = "ImageInfo";
	  this.$imageInfo = $imageInfo;
	  $target.appendChild($imageInfo);
  
	  this.data = data;
    this.exData = exData;
  
	  this.render();
	}
  
	setState({data, exData}) {
	  this.data = data;
    this.exData = exData;
	  this.render();
	}
  
	render() {
	  if (this.data.visible) {
		const { name, url, id } = this.data.image;
    // const data = (api.getCatStat(id).then(({data}) => data));
    // console.log(data);
    const { temperament, origin } = this.exData;
  
		this.$imageInfo.innerHTML = `
		  <div class="content-wrapper">
			<div class="title">
			  <span>${name}</span>
			  <button class="close">x</button>
			</div>
			<img src="${url}" alt="${name}"/>        
			<div class="description">
			  <span>성격: ${temperament}</span>
			  <span>태생: ${origin}</span>
			</div>
		  </div>`;
		this.$imageInfo.style.display = "block";
  
		document.addEventListener('click', e => {
		  if (e.target == document.querySelector('.ImageInfo') || e.target == document.querySelector('.close'))
			this.$imageInfo.style.display = "none";
		})
  
		document.addEventListener('keydown', e => {
		  if (e.key == "Escape")
			this.$imageInfo.style.display = "none";
		})
  
	  } else {
		this.$imageInfo.style.display = "none";
	  }
	}
  }
  