export default function Nodes({ $app, initialState, onClick }) {
	this.state = initialState;

	this.$target = document.createElement('ul');
	// this.$target.class = "nodes";
	$app.appendChild(this.$target);

	this.onClick = onClick;
	this.onBackClick = onBackClick;

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		if (this.state.nodes) {
			const nodeTemplate = this.state.nodes.map(node => {
				const iconPath = node.type === 'FILE' ? './assets/file.png' : './assets/directory.png';

				return `
					<div class="Node" data-node-id="${node.id}">
						<img src="${iconPath}" />
						<div>${node.name}</div>
					</div>
				`
			}).join('');

			this.$target.innerHTML = !this.state.isRoot ? `
				<div class="Node">
					<img src="./assets/prev.png">
				</div>${nodeTemplate}` : 
				nodeTemplate
		}

		this.$target.querySelectorAll('.Node').forEach($node => {
			$node.addEventListener('click', (e) => {
				const { nodeId } = e.target.dataset;

				if (!nodeId) {
					this.onBackClick();
				}
				const selectedNode = this.state.nodes.find(node => node_id === nodeId)

				if (selectedNode) {
					this.onClick(selectedNode);
				}
			})
		})
	};

	this.render();
}