import { emailRegex } from './regex';
import * as yup from 'yup';

export type IApplicantInformationForm = {
  firstName: string;
  lastName: string;
  personalPhone: string;
  personalEmail: string;
  expectedSalary: number;
  resume: string;
  linkedInProfile?: string | null;
  sourceOfHire: number;
  sourceOfHire_others?: string | null;
  deviceUsed: number;
};

export type IConflictOfInterestForm = {
  workWithKMC: boolean | null;
  dateWorkedWithKMC: string | null;
  locationWorkedWithKMC: string | null;
  workedWithKMCClients: boolean | null;
  dateWorkedWithKMCClients: string | null;
  locationWorkedWithClients: string;
  boundByAgreement: boolean | null;
};

export enum DeviceEnum {
  MOBILE = 0,
  LAPTOP = 1,
  PC = 2,
  TABLET = 3,
}

export enum SourceOfHireEnum {
  APPLICANT_REFERRAL = 0,
  BOSSJOB = 1,
  KMC_CAREERS_WEBSITE = 2,
  CLIENT_REFERRAL = 3,
  GOOGLE_JOBS = 4,
  INDEED = 5,
  INTERNSHIP_PROGRAM = 6,
  JOBSTREET = 7,
  LINKEDIN = 8,
  RE_PROFILE = 9,
  SOCIAL_MEDIA = 10,
  VENDOR = 11,
  ZOOM_WEBSITE = 12,
  TALENT_REFERRAL_PROGRAM = 13,
  NON_EMPLOYEE = 14,
  OTHER = 15,
}

export const ApplicantInformationFormSchema = yup.object({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  personalPhone: yup.string().required('Phone number is required!'),
  personalEmail: yup
    .string()
    .matches(emailRegex, { message: 'Invalid email!' })
    .required('Email is required!'),
  expectedSalary: yup
    .number()
    .typeError('Amount must be a number')
    .min(0, 'Please enter a valid number!')
    .required('Expected salary is required!'),
  resume: yup.string().required('Resume is required!'),
  linkedInProfile: yup.string().optional(),
  sourceOfHire: yup
    .number()
    .nullable()
    .required('Please select from the dropdown!'),
  sourceOfHire_others: yup.string().when('sourceOfHire', {
    is: (val: number) => !!val && val === 15,
    then: yup.string().required('This field is is required!'),
    otherwise: yup.string().optional(),
  }),
  deviceUsed: yup.number().required('Please select from the dropdown!'),
});

export const ConflictOfInterestFormSchema = yup.object({
  workWithKMC: yup.boolean().nullable().required('Please choose one option!'),
  dateWorkedWithKMC: yup
    .date()
    .nullable()
    .typeError('Invalid date!')
    .when('workWithKMC', {
      is: (val: boolean) => val === true,
      then: yup
        .date()
        .typeError('Invalid date!')
        .required('Please enter a location!'),
      otherwise: yup.date().notRequired(),
    }),
  locationWorkedWithKMC: yup
    .string()
    .nullable()
    .when('workWithKMC', {
      is: (val: boolean) => val === true,
      then: yup.string().required('Please enter a location!'),
      otherwise: yup.string().notRequired(),
    }),
  workedWithKMCClients: yup
    .boolean()
    .nullable()
    .required('Please choose one option!'),
  dateWorkedWithKMCClients: yup
    .date()
    .nullable()
    .typeError('Invalid date!')
    .when('workWithKMC', {
      is: (val: boolean) => val === true,
      then: yup
        .date()
        .typeError('Invalid date!')
        .required('Please enter a location!'),
      otherwise: yup.date().notRequired(),
    }),
  locationWorkedWithClients: yup
    .string()
    .nullable()
    .when('workedWithKMCClients', {
      is: (val: boolean) => val === true,
      then: yup.string().required('Please enter a location!'),
      otherwise: yup.string().notRequired(),
    }),
  boundByAgreement: yup
    .boolean()
    .nullable()
    .required('Please choose one option!'),
});

export const LegalStatusFormSchema = yup.object({
  filipinoCitizen: yup.boolean().required('Please choose one option!'),
  workPermitExpiryDate: yup.date().when('filipinoCitizen', {
    is: false,
    then: yup.date().required('Please enter a valid date!'),
    otherwise: yup.date().optional(),
  }),
  isConvicted: yup.boolean().required('Please choose one option!'),
  consent: yup.boolean().required('Please choose one option!'),
});
