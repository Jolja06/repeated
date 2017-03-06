//Функциональный компонент
//props - объект со свойствами, которые были переданы компоненту  

var ImageCounter = function(props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={'img/'+props.imageUrl} alt={props.imageAlt} onClick={props.onCount} />
        </div>
    );
}

var Hero = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function() {
        this.setState({ count: this.state.count + 1 }) //свойство которое надо обновить
    },

    render: function() {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.heroes.map(function(hero) {
                    return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} imageAlt={hero.imageAlt} />;
                })}
            </div> 
        );
    }
});

//Вывести функицию можно через React.createElement(Hero, null)
//Или jsx <Hero />

var data = [
    {
        id: 1,
        title: "React",
        subtitle: "Библиотека для создания пользовательских интерфейсов",
        imageUrl: "react.png",
        imageAlt: "react-logo"
    },
    {
        id: 2,
        title: "Angular 2",
        subtitle: "Один фреймворк",
        imageUrl: "angular.png",
        imageAlt: "angular2-logo"
    },
    {
        id: 3,
        title: "Ember",
        subtitle: "Фреймворк для создания амбициозных веб-приложений",
        imageUrl: "ember.png",
        imageAlt: "ember-logo"
    },
    {
        id: 4,
        title: "Vue",
        subtitle: "Прогрессивный фреймворк",
        imageUrl: "vue.png",
        imageAlt: "vue-logo"
    }
];

ReactDOM.render( <App heroes={data} />, document.getElementById('root')); 

//Для работы с событиями используются свойства

//Обновление DOM при изменении состояния. 
//Состояния есть только у сложных компонентов. - React.createClass
//Для изменения состояния используется метом setState

//Состояние пренадлежит компоненту и может изменяться 