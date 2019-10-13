import React from 'react';
import './author-details.css';

const AuthorDetails = () => {
    return(
        <div className="author-details">
            <div className="my-5">
                <h1 className="my-0">Romaniuk Vadym</h1>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <img className="img-fluid" src='https://i.pinimg.com/originals/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg' alt='author'/>
                </div>
                <div className="col-sm-9">
                    <ul className="author-info pl-0">
                        <li className="d-flex">
                            <p className="col-3">E-mail</p>
                            <p className="col-9">romaniuk1511@gmail.com</p>
                        </li>
                        <li className="d-flex">
                            <p className="col-3">Education</p>
                            <p className="col-9">Odessa National Polytechnic University </p>
                        </li>
                        <li className="d-flex">
                            <p className="col-3">Hobbies</p>
                            <p className="col-9">Football, Travelling</p>
                        </li>
                        <li className="d-flex">
                            <p className="col-3">Skills</p>
                            <p className="col-9">HTML/CSS, JavaScript, Bootstrap, Sass, React(basic), Git </p>
                        </li>
                    </ul>
                    <div className="author-description mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo exercitationem quos consequatur asperiores totam corrupti repellat, ducimus sit quas cumque quis explicabo adipisci, tempora, accusantium laudantium quaerat labore cupiditate!
                        Sunt error illum placeat at obcaecati deleniti aliquam veritatis odit, esse commodi temporibus perferendis ad id unde eligendi numquam. Exercitationem velit nulla et reprehenderit molestiae iusto architecto necessitatibus facere tempora?
                        Architecto asperiores distinctio, fugiat deserunt esse veniam pariatur commodi perferendis saepe! Officia ratione possimus veniam suscipit, accusamus nam incidunt in, officiis quibusdam at doloribus! Voluptas assumenda rem harum dolorum ipsam!
                        Repellendus, id a. Nobis voluptates, vero ad, eos magnam voluptatem sed expedita aut, ea eum rem nostrum quasi placeat odit! Consequatur itaque recusandae nam quae magni dolores iste quasi vel.
                        Numquam mollitia enim sapiente doloremque? Ducimus velit ipsum aspernatur animi dolorum pariatur odio? Odit consequuntur esse accusantium incidunt perspiciatis repudiandae illum iure. Inventore aliquid rerum voluptatem minima quasi animi natus!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetails;