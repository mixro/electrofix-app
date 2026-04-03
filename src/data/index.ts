import { componentsData } from './components';
import { faults } from './faults';
import { suppliers } from './suppliers';
import { technicians } from './technicians';
import { categories } from './categories';


export { componentsData } from './components';
export { faults } from './faults';
export { suppliers } from './suppliers';
export { technicians } from './technicians';
export { categories } from './categories';


// Helper functions
export const getComponentById = (id: string) => 
  componentsData.find(c => c.id === id);

export const getFaultsByComponentId = (componentId: string) => 
  faults.filter(f => f.componentId === componentId);

export const getComponentsByCategory = (category: string) => 
  componentsData.filter(c => c.category === category);

export const getSuppliersByCity = (city: string) => 
  suppliers.filter(s => s.city.toLowerCase() === city.toLowerCase());

export const getTechniciansByLocation = (location: string) => 
  technicians.filter(t => t.location.toLowerCase() === location.toLowerCase());

export const getAllCategories = () => categories;