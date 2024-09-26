import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Card, CardContent} from "@/components/ui/card.tsx";

const AuthPage = () => {
    return (
        <>
            <div className={"section py-5 bg-gray-50"}>
                <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>
                    <Link
                        to={"/"}
                        className={
                            "flex duration-150 gap-4 items-center hover:text-secondary-500"
                        }
                    >
                        <i className="fa-solid fa-house text-base"></i>
                        <li>
                            Home <i className="ml-2 fa-solid fa-angle-right"></i>
                        </li>
                    </Link>
                    <Link to={"/"}>
                        <li>
                            User account <i className="ml-2 fa-solid fa-angle-right"></i>
                        </li>
                    </Link>
                    <Link to={"/products"}>
                        <li className=" text-secondary-500">Sign In</li>
                    </Link>
                </ul>
            </div>

            <section className="section py-20 flex justify-center">
                <Tabs defaultValue="sign in" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="sign in">Sign in</TabsTrigger>
                        <TabsTrigger value="sign up">Sign up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sign in">
                        <Card>
                            <CardContent className="space-y-2">
                                <div className="py-4">
                                    <Label htmlFor="name" className="text-gray-900">
                                        Email Address
                                    </Label>
                                    <Input type="email" id="name" />
                                </div>
                                <div className="space-y-1 w-full pb-5">
                                    <div className="flex justify-between">
                                        <Label htmlFor="password" className="text-gray-900">
                                            Password
                                        </Label>
                                        <a href="#" className="text-sm text-secondary-500">
                                            Forgot Password
                                        </a>
                                    </div>
                                    <Input type="password" id="password" />
                                </div>

                                <div>
                                    <button
                                        className={`flex items-center justify-center rounded-sm text-gray-00 bg-primary-500 px-6 py-[.5rem] gap-4 mb-4 w-full`}
                                    >
                                        <a href={"#"}>SIGN IN </a>
                                        <span>
                      <i className="fa fa-long-arrow-right"></i>
                    </span>
                                    </button>
                                </div>

                                <div className="flex justify-center gap-1">
                                    <hr className="my-4 border-gray-300 w-full" />
                                    <p>or</p>
                                    <hr className="my-4 border-gray-300 w-full" />
                                </div>

                                <div>
                                    <button
                                        className={`flex items-center justify-center rounded-sm text-gray-700 px-6 py-[.5rem] gap-4 mb-4 w-full border`}
                                    >
                    <span>
                      <img
                          src="/images/google.png"
                          alt="google icon"
                          width={20}
                      />
                    </span>
                                        <a href={"#"} className="flex-1 text-center">
                                            {" "}
                                            Log in with Google{" "}
                                        </a>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="sign up">
                        <Card>
                            <CardContent className="space-y-2">
                                <div className="py-4">
                                    <Label htmlFor="name" className="text-gray-900">
                                        Name
                                    </Label>
                                    <Input type="text" id="name" />
                                </div>
                                <div className="pb-4">
                                    <Label htmlFor="email" className="text-gray-900">
                                        Email Address
                                    </Label>
                                    <Input type="email" id="email" />
                                </div>
                                <div className="space-y-1 w-full pb-5">
                                    <Label htmlFor="password" className="text-gray-900">
                                        Password
                                    </Label>

                                    <Input type="password" id="password" />
                                </div>
                                <div className="space-y-1 w-full pb-2">
                                    <Label htmlFor="confirm_password" className="text-gray-900">
                                        Confirm password
                                    </Label>

                                    <Input type="password" id="comfirm_password" />
                                </div>

                                <div className="flex gap-2 items-start pb-4">
                                    <input type="checkbox" id="terms" className="accent-primary-500 text-gray-100"/>
                                    <Label htmlFor="terms" className="text-gray-800">
                                        Do you agree to Misercom <span className="text-secondary-500">Terms of Condition</span> and <span  className="text-secondary-500">Privacy Policy</span>.

                                    </Label>
                                </div>

                                <div>
                                    <button
                                        className={`flex items-center justify-center rounded-sm text-gray-00 bg-primary-500 px-6 py-[.5rem] gap-4 mb-4 w-full`}
                                    >
                                        <a href={"#"}>SIGN UP </a>
                                        <span>
                      <i className="fa fa-long-arrow-right"></i>
                    </span>
                                    </button>
                                </div>

                                <div className="flex justify-center gap-1">
                                    <hr className="my-4 border-gray-300 w-full" />
                                    <p>or</p>
                                    <hr className="my-4 border-gray-300 w-full" />
                                </div>

                                <div>
                                    <button
                                        className={`flex items-center justify-center rounded-sm text-gray-700 px-6 py-[.5rem] gap-4 mb-4 w-full border`}
                                    >
                    <span>
                      <img
                          src="/images/google.png"
                          alt="google icon"
                          width={20}
                      />
                    </span>
                                        <a href={"#"} className="flex-1 text-center">
                                            {" "}
                                            Log in with Google{" "}
                                        </a>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}
export default AuthPage