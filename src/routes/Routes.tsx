import React, { ReactElement, useEffect, useMemo } from 'react';
import { Navigate, Route, Routes as RRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { unwrapResult } from '@reduxjs/toolkit';

/** stores **/
import { addPrefetchedImages, images } from '../stores/Img.store';

/** hooks **/
import { useAppDispatch } from '../hooks/useStore.hook';

/** components **/
import { SVGTypes } from '../components/atoms/SVGIcon';

/** routes **/
import AboutRoute from './About.route';
import ContactRoute from './Contact.route';
import FenceRoute from './Fence.route';
import HomeRoute from './Home.route';
import IrrigationRoute from './Irrigation.route';
import LandscapeRoute from './Landscape.route';
import LightingRoute from './Lighting.route';
import MaintenanceRoute from './Maintenance.route';
import MonumentRoute from './Monument.route';
import MonumentRepairRoute from './MonumentRepair.route';
import ServicesRoute from './Services.route';
import SubscribeRoute from './Subscribe.route';
import TrimmingRoute from './Trimming.route';

/** images **/
const { imgCarnival, imgColoredPencils, imgFence1, imgFenceBroken, imgFenceRepair, imgFlowers1, imgGrass, imgGuyPlanting1, imgGuyPlanting2, imgGuyTeaching2, imgHome, imgLandscapeRendering, imgLawnMower1, imgLawnMower2, imgLeaves, imgLighting1, imgLighting2, imgLighting3, imgMonument1, imgMonument2, imgMonument3, imgMonument4, imgMonument5, imgMonument6, imgMonument7, imgMonument8, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgOverhead1, imgOverhead2, imgOverhead3, imgParklaneFamily, imgPictureFrame, imgSprinklers1, imgSprinklers2, imgTrees1, imgTrees2, imgTreeTrimming, logoAnniversary, logoMain } = images;

export enum Paths {
  ABOUT = '/about',
  CONTACT = '/contact',
  FENCE = '/services/fence',
  HOME = '/',
  IRRIGATION = '/services/irrigation',
  LANDSCAPE = '/services/landscape',
  LIGHTING = '/services/lighting',
  MAINTENANCE = '/services/maintenance',
  MONUMENT = '/services/monument',
  MONUMENT_REPAIR = '/services/monumentRepair',
  SERVICES = '/services',
  SUBSCRIBE = '/learn-more',
  TRIMMING = '/services/trimming'
}

export interface IRoute {
  active: boolean;
  children?: IRoute[];
  Component: ReactElement;
  displayInHeader?: boolean;
  headerLinkLines?: string[];
  icon?: SVGTypes;
  iconSize?: string;
  name: string;
  path: Paths;
  prefetchImages: string[];
}

export const routeArr: IRoute[] = [
  {
    active: true,
    children: [],
    Component: <Route key={Paths.HOME} path={Paths.HOME} element={<HomeRoute />} />,
    //Component: <HomeRoute key={Paths.HOME} path={Paths.HOME} />,
    name: 'Home',
    path: Paths.HOME,
    prefetchImages: [imgGrass, imgHome, logoAnniversary]
  },
  {
    active: true,
    children: [],
    Component: <Route key={Paths.ABOUT} path={Paths.ABOUT} element={<AboutRoute />} />,
    //Component: <AboutRoute key={Paths.ABOUT} path={Paths.ABOUT} />,
    name: 'About',
    path: Paths.ABOUT,
    prefetchImages: [imgCarnival, imgMonument6, imgParklaneFamily, imgPictureFrame, imgTrees2, logoMain]
  },
  {
    active: true,
    children: [
      {
        active: true,
        Component: <Route key={Paths.MAINTENANCE} path={Paths.MAINTENANCE} element={<MaintenanceRoute />} />,
        //Component: <MaintenanceRoute key={Paths.MAINTENANCE} path={Paths.MAINTENANCE} />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Maintenance'],
        icon: SVGTypes.LAWN_MOWER,
        iconSize: '22px',
        name: 'HOA Maintenance',
        path: Paths.MAINTENANCE,
        prefetchImages: [imgLawnMower1, imgLawnMower2]
      },
      {
        active: true,
        Component: <Route key={Paths.IRRIGATION} path={Paths.IRRIGATION} element={<IrrigationRoute />} />,
        //Component: <IrrigationRoute key={Paths.IRRIGATION} path={Paths.IRRIGATION} />,
        displayInHeader: true,
        headerLinkLines: ['HOA Licensed', 'Irrigation'],
        icon: SVGTypes.HOSE,
        iconSize: '22px',
        name: 'HOA Irrigation',
        path: Paths.IRRIGATION,
        prefetchImages: [imgSprinklers1, imgSprinklers2]
      },
      {
        active: true,
        Component: <Route key={Paths.LANDSCAPE} path={Paths.LANDSCAPE} element={<LandscapeRoute />} />,
        //Component: <LandscapeRoute key={Paths.LANDSCAPE} path={Paths.LANDSCAPE} />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Landscaping'],
        icon: SVGTypes.LANDSCAPE,
        iconSize: '24px',
        name: 'HOA Landscaping',
        path: Paths.LANDSCAPE,
        prefetchImages: [imgColoredPencils, imgFlowers1, imgMonument1, imgLandscapeRendering, imgOverhead2, imgOverhead3]
      },
      {
        active: true,
        Component: <Route key={Paths.MONUMENT} path={Paths.MONUMENT} element={<MonumentRoute />} />,
        //Component: <MonumentRoute key={Paths.MONUMENT} path={Paths.MONUMENT} />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Monuments'],
        icon: SVGTypes.MONUMENT,
        iconSize: '19px',
        name: 'HOA Monument Installation',
        path: Paths.MONUMENT,
        prefetchImages: [imgMonument1, imgMonument4, imgMonument5]
      },
      {
        active: true,
        Component: <Route key={Paths.MONUMENT_REPAIR} path={Paths.MONUMENT_REPAIR} element={<MonumentRepairRoute />} />,
        //Component: <MonumentRepairRoute key={Paths.MONUMENT_REPAIR} path={Paths.MONUMENT_REPAIR} />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Masonry'],
        icon: SVGTypes.MASONRY,
        iconSize: '20px',
        name: 'HOA Monument Repair',
        path: Paths.MONUMENT_REPAIR,
        prefetchImages: [imgMonument2, imgMonument3, imgMonument7, imgMonument8]
      },
      {
        active: true,
        Component: <Route key={Paths.FENCE} path={Paths.FENCE} element={<FenceRoute />} />,
        //Component: <FenceRoute key={Paths.FENCE} path={Paths.FENCE} />,
        displayInHeader: true,
        headerLinkLines: ['HOA Fence', 'Installation'],
        icon: SVGTypes.FENCE,
        iconSize: '22px',
        name: 'Fence Installation',
        path: Paths.FENCE,
        prefetchImages: [imgFence1, imgFenceBroken, imgFenceRepair]
      },
      {
        active: true,
        Component: <Route key={Paths.LIGHTING} path={Paths.LIGHTING} element={<LightingRoute />} />,
        //Component: <LightingRoute key={Paths.LIGHTING} path={Paths.LIGHTING} />,
        displayInHeader: true,
        headerLinkLines: ['HOA Landscape', 'Lighting'],
        icon: SVGTypes.LIGHT_BULB,
        iconSize: '29px',
        name: 'HOA Landscape Lighting',
        path: Paths.LIGHTING,
        prefetchImages: [imgLighting1, imgLighting2, imgLighting3]
      },
      {
        active: true,
        Component: <Route key={Paths.TRIMMING} path={Paths.TRIMMING} element={<TrimmingRoute />} />,
        //Component: <TrimmingRoute key={Paths.TRIMMING} path={Paths.TRIMMING} />,
        displayInHeader: true,
        headerLinkLines: ['HOA Tree', 'Pruning'],
        icon: SVGTypes.TREES,
        iconSize: '20px',
        name: 'HOA Tree Pruning',
        path: Paths.TRIMMING,
        prefetchImages: [imgLeaves, imgTrees1, imgTreeTrimming]
      }
    ],
    Component: <Route key={Paths.SERVICES} path={Paths.SERVICES} element={<ServicesRoute />} />,
    //Component: <ServicesRoute key={Paths.SERVICES} path={Paths.SERVICES} />,
    name: 'Services',
    path: Paths.SERVICES,
    prefetchImages: [imgGuyPlanting2, imgGuyTeaching2]
  },
  {
    active: true,
    children: [],
    Component: <Route key={Paths.SUBSCRIBE} path={Paths.SUBSCRIBE} element={<SubscribeRoute />} />,
    //Component: <SubscribeRoute key={Paths.SUBSCRIBE} path={Paths.SUBSCRIBE} />,
    name: 'Get Informed',
    path: Paths.SUBSCRIBE,
    prefetchImages: [imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3]
  },
  {
    active: true,
    children: [],
    Component: <Route key={Paths.CONTACT} path={Paths.CONTACT} element={<ContactRoute />} />,
    //Component: <ContactRoute key={Paths.CONTACT} path={Paths.CONTACT} />,
    name: 'Contact',
    path: Paths.CONTACT,
    prefetchImages: [imgLeaves, imgOverhead1]
  }
];
function Routes() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const routes = useMemo(() => {
    return flattenRoutes(routeArr);
  }, [routeArr]);
  useEffect(() => {
    const imagesToPreFetch = routes
      .filter(route => route.path !== location.pathname && route.prefetchImages?.length)
      .reduce<string[]>((acc, route) => [...acc, ...route.prefetchImages], []);
    dispatch(addPrefetchedImages(imagesToPreFetch)).then(unwrapResult).catch(console.error);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, [location?.pathname, routes]);


  function flattenRoutes(routes: IRoute[]): IRoute[] {
    return routes.reduce<IRoute[]>((acc, route) => {
      const childRoutes = route?.children?.length ? flattenRoutes(route.children) : [];
      return [...acc, route, ...childRoutes];
    }, []);
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <RRoutes>
        {routes.map(route => route.Component)}
        <Route path="*" element={<Navigate replace to="/" />} />
      </RRoutes>
    </AnimatePresence>
  );
}
export default Routes;
