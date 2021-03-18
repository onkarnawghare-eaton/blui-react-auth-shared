/**
 * @packageDocumentation
 * @module AuthUIContextProvider
 */

import { AuthUIActions } from './authTypes';
import { RegistrationUIActions } from './registrationTypes';
import { PasswordRequirement } from '../../types/ResetPasswordParams';
import { ComponentType, CSSProperties } from 'react';
import { AccountDetailsFormProps } from '../../types/AccountDetails';

type CustomRegistrationForm = {
    title?: string;
    instructions?: string;
    component: ComponentType<AccountDetailsFormProps>;
};
/**
 * The application provides various action functions and properties
 * to the authentication user interface. These properties are set
 * from this type.
 */
type AuthUIContextProviderProps = {
    /**
     * Provides application actions for the user's authentication needs.
     */
    authActions: () => AuthUIActions;
    /**
     * Provides application actions for the user's registration needs.
     */
    registrationActions: () => RegistrationUIActions;
    /**
     * When true, shows the Create Account button to allow for self registration.
     *
     * Default: true
     */
    showSelfRegistration?: boolean;
    /**
     * When true, the invitation-based deep routes will be activated.
     *
     * Default: true
     */
    enableInviteRegistration?: boolean;
    /**
     * When true, the Contact Support link will be visible on the login screen.
     *
     * Default: true
     */
    showContactSupport?: boolean;
    /**
     * When true, the Reset Password deep routes will be activated and a Forgot Password link will appear on the login screen.
     *
     * Default: true
     */
    enableResetPassword?: boolean;
    /**
     * When true, the Remember Me button will be available on the login screen.
     *
     * Default: true
     */
    showRememberMe?: boolean;
    /**
     * When true, the Cybersecurity certification badge will be shown on the login screen.
     *
     * Default: true
     */
    showCybersecurityBadge?: boolean;
    /**
     * When true, presents a button to access link based flows.
     *
     * Default: false
     */
    allowDebugMode?: boolean;
    /**
     * Array of password strength requirements.
     */
    passwordRequirements?: PasswordRequirement[];
    /**
     * Project image shown on splash screen and login screen.
     *
     * Dimensions of the image should be 534w x 152h with a transparent background.
     * Differently sized images may not render properly on all devices.
     *
     * Default: Provides an example project image.
     */
    projectImage?: number | string;
    /**
     * Image shown behind the workflow cards for the authentication and registration workflows.
     *
     * Default: Isometric triangles image.
     */
    background?: Pick<
        CSSProperties,
        'backgroundImage' | 'backgroundColor' | 'backgroundPosition' | 'backgroundSize' | 'backgroundRepeat'
    >;
    /**
     * Contact email to be shown for support.
     *
     * Default: Provides a fake email.
     */
    contactEmail?: string;
    /**
     * Contact phone number to be shown for support. UI-display only (human-readable).
     *
     * Default: Provides a fake phone number.
     */
    contactPhone?: string;
    /**
     * Contact phone number to be used with tel URI to open the phone app and make a
     * call. May include pauses, etc. and therefore not look human-readable.
     *
     * Default: Provides a fake phone number.
     */
    contactPhoneLink?: string;
    /**
     * Allow the EULA to be displayed as HTML or Text
     *
     * Default: Displays as html
     */
    htmlEula?: boolean;
    /**
     * Custom content to render below the login button and above registration links.
     *
     * Default: None
     */
    loginActions?: JSX.Element | ((navigation: any) => JSX.Element);
    /**
     * Custom content to render below the login form.
     *
     * Default: None
     */
    loginFooter?: JSX.Element | ((navigation: any) => JSX.Element);
    /**
     * Custom content to render above the login form.
     *
     * Default: None
     */
    loginHeader?: JSX.Element | ((navigation: any) => JSX.Element);

    /**
     * Custom screens to render to capture additional user details during registration
     *
     * Default: None
     */
    customAccountDetails?: Array<CustomRegistrationForm | null>;
};

export type { AuthUIContextProviderProps, AuthUIActions, RegistrationUIActions, CustomRegistrationForm };
