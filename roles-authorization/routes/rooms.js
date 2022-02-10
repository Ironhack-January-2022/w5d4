const router = require("express").Router();
const Room = require('../models/Room')

router.get("/", (req, res, next) => {
	// get only the rooms that belong to the logged in user
	Room.find({ owner: req.session.user._id })
		.then(rooms => {
			res.render("rooms/index", { rooms });
		})
		.catch(err => next(err))
});

router.get("/add", (req, res, next) => {
	res.render("rooms/add");
});

router.post('/', (req, res, next) => {
	const { name, price } = req.body
	const id = req.session.user._id
	// console.log(id)
	Room.create({ name, price, owner: id })
		.then(room => {
			console.log(room)
			res.redirect('/rooms')
		})
		.catch(err => next(err))
})

router.get('/:id/delete', (req, res, next) => {
	const query = { _id: req.params.id }
	console.log(req.session.user)
	// if you are an admin you can delete any room
	// if you are a normal user you only can delete rooms 
	// where you are the owner
	if (req.session.user.role !== 'admin') {
		query.owner = req.session.user._id
	}
	Room.findOneAndDelete(query)
		.then(() => {
			res.redirect('/rooms')
		})
		.catch(err => next(err))
});


module.exports = router;
