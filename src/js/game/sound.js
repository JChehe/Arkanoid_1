var Howler = require('../lib/howler.min.js')
var music = require('../../plugin/music_all.mp3')


var Sound = function() {
	this.sound = new Howler.Howl({
		src: ['../../plugin/music_all.mp3'],
		sprite: {
			wall: [0, 400],
			brick: [1701, 400],
			game_fail: [2180, 1500],
			ready_go: [3600, 2080],
			game_success: [5800, 3500]
		},
		volume: 0.6
	})

	// this.game_success()
}

Sound.prototype = {
	wall: function() {
		this._wall = this.sound.play('wall')
		this.sound.volume(0.4, this._wall);
	},

	brick: function() {
		this._brick = this.sound.play('brick')
	},

	ready_go: function() {
		this._ready_go = this.sound.play('ready_go')
	},

	game_fail: function() {
		this._game_fail = this.sound.play('game_fail')
	},

	game_success: function() {
		this._game_success = this.sound.play('game_success')
	},
	stop: function(id) {
		if(id !== undefined || id !== null) {
			this.sound.stop(id)
		} else {
			this.sound.stop()
		}
	}
}

var sound = new Sound()
module.exports = sound