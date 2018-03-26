function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    // This line says, if the property already exists, good, otherwise, create an empty array
    this.events[type] = this.events[type] || [];
    // Adding a function to the array
    this.events[type].push(listener);
}

// Emitting an event
Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;