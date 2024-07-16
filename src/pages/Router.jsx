import { Route, Routes } from "react-router-dom"
import BareunLayout from "../components/BareunLayout"
import Home from "./bareun/Home"
import Avatar from "./bareun/Avatar"
import VideoCall from "./bareun/VideoCall"
import Chatting from "./bareun/Chatting"
import Community from "./bareun/Community"
import Learning from "./bareun/Learning"

export default function Router() {
    return (
        <Routes>
            <Route path="/page" element={<BareunLayout />}>
                <Route index element={<Home />} />
                <Route path="avatar" element={<Avatar />} />
                <Route path="videocall" element={<VideoCall />} />
                <Route path="chatting" element={<Chatting />} />
                <Route path="community" element={<Community />} />
                <Route path="learning" element={<Learning />} />
            </Route>
        </Routes>
    )
}