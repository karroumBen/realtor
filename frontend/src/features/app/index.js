import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/auth';
import HeroSection from '../../components/HeroSection';


const AppIndex = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({isSeller: true}))

  }, []);

    return (
        <section className="home-page">
          <HeroSection />
        </section>
    )
}

export default AppIndex;