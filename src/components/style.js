const style = {
	commentBox: {
		width:'80vw',
		margin:'0 auto',
		fontFamily:'Helvetica, sans-serif'
	},
	title: {
		textAlign:'center',
		textTransform:'uppercase'
	},
	commentList: {
		border:'1px solid #f1f1f1',
		padding:'0 12px',
		maxHeight:'70vh',
		overflow:'scroll'
	},
	comment: {
		backgroundColor:'#fafafa',
		margin:'10px',
		padding:'3px 10px',
		fontSize:'.85rem'
	},
	commentForm: {
		margin:'10px',
		display:'flex',
		flexFlow:'row wrap',
		justifyContent:'space-between'
	},
	commentFormAuthor: {
		minWidth:'150px',
		margin:'3px',
		padding:'0 10px',
		borderRadius:'3px',
		height:'40px',
		flex:'2'
	},
	commentFormText: {
		flex:'4',
		minWidth:'400px',
		margin:'3px',
		padding:'0 10px',
		height:'40px',
		borderRadius:'3px'
	},
	commentFormPost: {
		minWidth:'75px',
		flex:'1',
		height:'40px',
		margin:'5px 3px',
		fontSize:'1rem',
		backgroundColor:'#A3CDFD',
		borderRadius:'3px',
		color:'#fff',
		textTransform:'uppercase',
		letterSpacing:'.055rem',
		border:'none'
	},
	updateLink: {
		textDecoration:'none',
		paddingRight:'15px',
		fontSize:'.7rem'
	},
	deleteLink: {
		textDecoration:'none',
		paddingRight:'15px',
		fontSize:'.7rem',
		color:'red'
	},
	athleteCard: {
		border: '1px solid #ccc',
		boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
		display: 'inline-block',
		margin: '0 1em 1em 0',
		maxWidth: '300px',
		padding: '0',
		position: 'relative',
		transition: 'all .2s ease-in-out',
		width: '100%',
		cursor: 'pointer',
		backgroundColor: 'white',
	},
	athleteName: {
		color: '#030303',
		 display: 'inline-block',
		 fontSize: '1.6em',
		 overflow: 'hidden',
		 padding: '.2em',
		 textAlign: 'center',
		 textDecoration: 'none',
		 textOverflow: 'ellipsis',
		 whiteSpace: 'nowrap',
		 width: '100%'
	},
	athleteImg: {
		margin: '0',
		width: '100%'
	},
	headerContainer: {
		backgroundColor: 'black',
		padding: '10px'
	},
	athleteIndexHeader: {
		textTransform: 'uppercase',
		color: 'white',
		textAlign: 'center'
	}
}
module.exports = style;