import './CouplePage.css'
import { AppState } from '../../Store'
import { useSelector } from 'react-redux'
import { IoIosLink } from "react-icons/io";
import CoupleDetailCard from './components/couple_detail_card/CoupleDetailCard'
import AddDetailComponent from '../../cores/utils/components/component/add_detail_component/AddDetailComponent';

const CouplePage: React.FC = () => {
  const profileState = useSelector((state: AppState) => state.dashboard)
  return (
    <section className="couplePage">
      <div className="coupleRelationStatus">
        <h2 className="couplePageTitle">
          Start Your Search
        </h2>
        <div className="coupleRelationCard">
          <CoupleDetailCard
            isMe={true}
            title='Profile'
            profile={profileState.profile}
          />
          <IoIosLink
            style={{
              width: "32px",
              height: "32px",
            }}
          />
          <CoupleDetailCard
            isMe={false}
            title={profileState.profile?.userMatchStatus}
            profile={profileState.profile}
          />
        </div>
        <AddDetailComponent />
      </div>
    </section>
  )
}

export default CouplePage