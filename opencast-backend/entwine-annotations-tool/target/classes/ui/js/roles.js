/**
 *  Copyright 2012, Entwine GmbH, Switzerland
 *  Licensed under the Educational Community License, Version 2.0
 *  (the "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.osedu.org/licenses/ECL-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an "AS IS"
 *  BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 *  or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 *
 */

/**
 * A module containing the ROLES values enum.
 * @module ROLES
 */
define([], function () {

    "use strict";

    /**
     * Enum for the possible tool roles
     * @readonly
     * @enum {String}
     */
    return {
        /** SUPERVISOR = "supervisor"*/
        SUPERVISOR: "supervisor",
        /** STUDENT = "user"*/
        USER: "user",
        /** ADMINISTRATOR = "administrator"*/
        ADMINISTRATOR: "administrator"
    };
});