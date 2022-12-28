# courier-mobile

## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Configure environment variables.  
   Create `env.development` , `env.staging` & `env.production` files (or extract file `.env.zip` and move file to root project `env.development`, `env.staging` & `env.production`).
4. Run `yarn android:dev` or `yarn ios:dev` for run app development mode
   Run `yarn android:staging` or `yarn ios:stg` for run app production mode
   Run `yarn android:prod` or `yarn ios:prod` for run app production mode

## Tools

- **Styling**: [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn)
- **Global State Management**: [Zustand](https://github.com/pmndrs/zustand/)
- **Server State Management**: [React Query](https://react-query.tanstack.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Local Database**: [WatermelonDB](https://github.com/Nozbe/WatermelonDB)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **Fallback UI**: [React Native Error Boundary](https://github.com/carloscuesta/react-native-error-boundary)
