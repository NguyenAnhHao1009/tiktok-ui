import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';


import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <>
            <Routes>
                {publicRoutes.map((each, index) => {
                    let Layout = DefaultLayout;

                    if (each.layout) {
                        Layout = each.layout;
                    } else if (each.layout === null) {
                        Layout = Fragment;
                    }

                    const Page = each.component;
                    return (
                        <Route
                            key={index}
                            path={each.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
