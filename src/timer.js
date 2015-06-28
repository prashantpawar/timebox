var Timer = React.createClass({
    getInitialState: function () {
        return {data: []};
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
    render: function() {
        return (
          <div className="timer">
            Hello, world! I am a Timer.
            <Lap data={this.state.data}/>
          </div>
        );
    }
});

React.render(
  <Timer url="data/timer-data.json"/>,
  document.getElementById('content')
);