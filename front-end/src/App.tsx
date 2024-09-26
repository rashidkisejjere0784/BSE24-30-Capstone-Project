import {Route, Routes} from 'react-router-dom'
import AuthPage from "@/pages/auth";
import PageNotFound from "@/pages/page-not-found.tsx";
import Base from "@/layouts/base.tsx";
const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                {/*<Route index element={<Home />} />*/}
                <Route path={"auth"} element={<AuthPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}
export default App;