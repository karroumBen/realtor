import { useEffect, useState } from 'react'
import ListNavBar from '../../components/ListNavBar';
import NewPropertyDialog from '../../components/NewPropertyDialog';
import { getProperties } from '../../services/property';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyList } from '../../store/properties';
import PropertyCard from '../../components/PropertyCard';

const PropertyList = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [editProperty, setEditedProperty] = useState({});
  const properties = useSelector(state => state.propertyList.data);
  const handleModal = () => {
    setIsVisible(true);
  }

  const openForEdit = (property) => {
    setEditedProperty(property);
    setIsVisible(true);
  }
  const closeModal = () => {
    setIsVisible(false);
    setEditedProperty({});
  }


  const fetchProperties = () => {
    getProperties()
      .then(({data}) => {
        dispatch(setPropertyList(data));
      })
      .then(() => {
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(fetchProperties, []);

  return (
    <>
      <section>
        <ListNavBar
          title="Property List"
          handleModel={handleModal}
        />
      </section>


      <section className='seller-items'>
        {
          properties.map(property => <PropertyCard
            key={property.id}
            property={property}
            openForEdit={openForEdit}/>)
        }
      </section>

      { isVisible && <NewPropertyDialog editProperty={editProperty} closeModal={closeModal} reloadItems={fetchProperties}/>}
    </>
  )
}

export default PropertyList;