import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../App.css'


// class GroupTemplate extends Component {
//   render() {
//     var { group } = this.props
//     return (<div>
//         <label>{group.content}</label>
//     </div>)
//   }
// }
//
// class ItemTemplate extends Component {
//   render() {
//     var { item } = this.props
//     return (<div>
//         <label>{item.content}</label>
//     </div>)
//   }
// }
//
// class VisTimeline extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       timeline: null
//     }
//   }
//
//   initTimeline = () => {
//     // create groups
//     var numberOfGroups = 25;
//     var groups = new vis.DataSet()
//     for (let i = 0; i < numberOfGroups; i++) {
//         groups.add({
//           id: i,
//           content: 'Truck ' + i
//         })
//     }
//
//     // create items
//     var numberOfItems = 1000;
//     var items = new vis.DataSet();
//     var itemsPerGroup = Math.round(numberOfItems/numberOfGroups);
//     for (let truck = 0; truck < numberOfGroups; truck++) {
//         var date = new Date();
//         for (let order = 0; order < itemsPerGroup; order++) {
//           date.setHours(date.getHours() +  4 * (Math.random() < 0.2));
//           var start = new Date(date);
//           date.setHours(date.getHours() + 2 + Math.floor(Math.random()*4));
//           var end = new Date(date);
//           items.add({
//             id: order + itemsPerGroup * truck,
//             group: truck,
//             start: start,
//             end: end,
//             content: 'Order ' + order
//           });
//         }
//     }
//
//     var options = {
//         orientation: 'top',
//         maxHeight: 400,
//         start: new Date(),
//         end: new Date(1000*60*60*24 + (new Date()).valueOf()),
//         editable: true,
//         template: function (item, element) {
//             if (!item) { return }
//             ReactDOM.unmountComponentAtNode(element);
//             return ReactDOM.render(<ItemTemplate item={item} />, element);
//         },
//         groupTemplate: function (group, element) {
//             if (!group) { return }
//             ReactDOM.unmountComponentAtNode(element);
//             return ReactDOM.render(<GroupTemplate group={group} />, element);
//         }
//     }
//
//     var container = document.getElementById('visTimeline')
//     var timeline = new vis.Timeline(container, items, groups, options)
//
//     this.setState({
//       timeline: timeline
//     });
//   }
//
//   componentDidMount() {
//     console.log("componentDidMount", vis)
//     this.initTimeline()
//   }
//
//   render() {
//       return <div>
//         <h3>Demo showing the Timeline Component (wwww.visjs.org)</h3>
//         <div id="visTimeline"></div>
//       </div>
//   }
// }

var timeline;
// create groups
var numberOfGroups = 25;
var groups = new vis.DataSet()
for (var i = 0; i < numberOfGroups; i++) {
    groups.add({
      id: i,
      content: 'Truck ' + i
    })
}

// create items
var numberOfItems = 1000;
var items = new vis.DataSet();
var itemsPerGroup = Math.round(numberOfItems/numberOfGroups);
for (var truck = 0; truck < numberOfGroups; truck++) {
    var date = new Date();
    for (var order = 0; order < itemsPerGroup; order++) {
      date.setHours(date.getHours() +  4 * (Math.random() < 0.2));
      var start = new Date(date);
      date.setHours(date.getHours() + 2 + Math.floor(Math.random()*4));
      var end = new Date(date);
      items.add({
        id: order + itemsPerGroup * truck,
        group: truck,
        start: start,
        end: end,
        content: 'Order ' + order
      });
    }
}

var GroupTemplate = React.createClass({
  render: function() {
    var { group } = this.props;
    return <div>
        <label>{group.content}</label>
    </div>
  }
})

var ItemTemplate = React.createClass({
  render: function() {
    var { item } = this.props;
    return <div>
        <label>{item.content}</label>
    </div>
  }
})

// specify options
var options = {
    orientation: 'top',
    maxHeight: 400,
    start: new Date(),
    end: new Date(1000*60*60*24 + (new Date()).valueOf()),
    editable: true,
    template: function (item, element) {
        if (!item) { return }
        ReactDOM.unmountComponentAtNode(element);
        return ReactDOM.render(<ItemTemplate item={item} />, element);
    },
    groupTemplate: function (group, element) {
        if (!group) { return }
        ReactDOM.unmountComponentAtNode(element);
        return ReactDOM.render(<GroupTemplate group={group} />, element);
    }
}


var VisTimeline = React.createClass({
    componentDidMount: function() {
        return initTimeline();
    },
    render: function() {
        return <div>
            <div id="mytimeline"></div>
        </div>
    }
});

function initTimeline() {
    var container = document.getElementById('mytimeline');
    timeline = new vis.Timeline(container, items, groups, options);
}

class OptVisContainer extends Component {
  render() {
    return (
        <div>
          <VisTimeline />
        </div>
    )
  }
}

export default OptVisContainer
