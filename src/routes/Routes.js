import React from 'react';
import {Route, Routes as ReactRourerRoutes} from 'react-router-dom'

import authors from '../pages/posts/dataForPosts';
import HomePage from '../pages/home/Home.page';
import PostsPage from '../pages/posts/Posts.page';
import GalleryPage from '../pages/gallery/Gallery.page';
import ContactsPage from '../pages/contacts/Contacts.page';
import ContactSingle from '../pages/contacts/singleContact/ContactSingle.page';
import listOfContacts from '../pages/contacts/contact_components/listOfContacts';

import styles from './Routes.module.css'


const showPosts = (obj) => {
    return Object.values(obj).map((author, i) => <PostsPage author={author} key={i} />)
}

export const appRoutes = {
    home: {
        id: 1,
        path: "/",
        element: <HomePage />
    },
    posts: {
        id: 2,
        path: "/posts",
        element: showPosts(authors),
    },
    gallery: {
        id: 3,
        path: "/gallery",
        element: <GalleryPage />
    },
    contacts: {
        id: 4,
        path: "/contacts",
        element: <ContactsPage />
    },
}

const Routes = () => {
    return (
        <div className={styles["page"]}>

            <ReactRourerRoutes>

                {Object.values(appRoutes).map(({id, path, element}) => (
                    <Route key={id} path={path} element={element} />
                ))}

                
                    <Route path='contacts/:contactId' element={<ContactSingle data={listOfContacts} />}/>
                

            </ReactRourerRoutes>
            


        </div>
    );
};

export default Routes;