import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import { request } from "./api.js";

const $app = document.querySelector('.app');

export default function App($app) {
    this.state = {
        isRoot: false,
        nodes: [],
        depth: [],
		selectedFilePath: null
    }

    const breadcrumb = new Breadcrumb({
        $app,
        initialState: this.state.depth
    })

	const imageView = new ImageView({
		$app,
		initialState: this.state.selectedFilePath
	})

	const nodes = new Nodes({
		$app,
		initialState: {
			isRoot: this.state.isRoot,
			nodes: this.state.nodes
		},
		onClick: async (node) => {
			try {
				if (node.type === 'DIRECTORY') {
					console.log("directory type click");
					const nextNodes = await request(node.id)
					this.setState({
						...this.state,
						depth: [...this.state.depth, node],
						nodes: nextNodes
					})
				} else if (node.type === 'FILE') {
					console.log("file type click");
					this.setState({
						...this.state,
						selectedFilePath: node.filePath
					})
				}
			} catch(e) {
				console.log(`onClick Error - ${e.message}`);
			}
		},
		onBackClick: async () => {
			try {
				const nextState = { ...this.state };
				nextState.depth.pop();

				const prevNodeId = nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id;
				
				if (prevNodeId === null) {
					const rootNodes = await request();
					this.setState({
						...nextState,
						isRoot: true,
						nodes: rootNodes
					})
				} else {
					const prevNodes = await request(prevNodeId);

					this.setState({
						...nextState,
						isRoot: false,
						nodes: prevNodes
					})
				}
			} catch(e) {
				console.log(`BackClick error - ${e.message}`)
			}
		}

	})

	this.setState = (nextState) => {
		this.state = nextState;
		breadcrumb.setState(this.state.depth);
		node.setState({
			isRoot: this.state.isRoot,
			nodes: this.state.nodes
		})
		imageView.setState(this.state.selectedFilePath)
	}

	const init = async() => {
		try {
			const rootNodes = await request();
			this.setState({
				...this.state,
				isRoot: true,
				nodes: rootNodes
			})
		} catch(e) {
			console.log(`Error - ${e.message}`)
		}
	}

	init()
}

const IMAGE_PATH_PREFIX = '';

function ImageView({ $app, initialState }) {
	this.state = initialState;
	this.$target = document.createElement('div');
	this.$target.className = 'Modal ImageView';

	$app.appendChild(this.$target);

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	}

	this.render = () => {
		this.$target.innerHTML = `
			<div class="content">
				${this.state ? `<img src=${IMAGE_PATH_PREFIX}${this.state}">` 
				: ''}
			</div>`	
	}

	this.render();
}