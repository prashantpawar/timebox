var Timer = React.createClass({
    getInitialState: function () {
        return {data: [], time: 0, timerState: 'Start'};
    },
    loadLaps: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadLaps();
    },
    toggleTimer: function (e) {
        var that = this,
            updateDuration = 100;
        e.preventDefault();
        if (that.state.timerState === 'Start') { 
            that.setState({timerState: 'Stop'});
            that.interval = setInterval(function () {
                that.setState({that: that.state.time+=updateDuration});
            }, updateDuration);
        } else {
            this.setState({timerState: 'Start'});
            clearInterval(that.interval);
        }
        return;
    },
    render: function() {
        var timerObj = new Date(this.state.time),
            timerText = timerObj.getMinutes() + ":" + timerObj.getSeconds() + ":" + timerObj.getMilliseconds();
        return (
          <div className="timer">
            <div ref="welcome">Hello, world! I am a Timer.</div>
            <button ref="timerToggleBtn" onClick={this.toggleTimer}>{this.state.timerState}</button>
            <div className="timerText">{timerText}</div>
            <Lap data={this.state.data}/>
          </div>
        );
    }
});

React.render(
  <Timer url="data/timer-data.json"/>,
  document.getElementById('content')
);