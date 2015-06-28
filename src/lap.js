var Lap = React.createClass({
    render: function () {
        var lapNodes = this.props.data.map(function (lap) {
            return (
                <li className="lap">
                    {lap.startTime} - {lap.endTime}
                </li>
            );
        });
        return (
            <ol className="lapList">
                <h2>Lap</h2>
                {lapNodes}
            </ol>
        );
    }
});