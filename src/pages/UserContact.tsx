import { Separator } from "@/components/ui/separator";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { editContact } from "@/redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Firstname should be atleast 2 characters long" })
    .max(50, { message: "Max Firstname length should be 50" }),
  lastname: z
    .string()
    .min(2, { message: "Lastname should be atleast 2 characters long" })
    .max(50, { message: "Max Lastname length should be 50" }),
  status: z.enum(["active", "inactive"]),
});

type formValues = z.infer<typeof formSchema>;

const UserContact = () => {
  const { userId } = useParams<{ userId: string }>();

  const contactsData = useSelector(
    (state: RootState) => state.contacts.contacts
  );

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const userData = contactsData.find((contact) => contact.id === userId);

    // console.log(userData);

    form.reset({
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      status: userData?.status,
    });
  }, [userId, contactsData, form]);

  const dispatch = useDispatch();

  const onSubmit = (values: formValues) => {
    dispatch(
      editContact({
        id: userId,
        firstname: values.firstname,
        lastname: values.lastname,
        status: values.status,
        // image: values.image[0],
      })
    );

    console.log(values);
  };

  return (
    <div className="px-6 py-12">
      <div className="flex items-center justify-center gap-3 mb-8 mob:gap-8">
        <Edit className="w-12 h-12" />
        <h1 className="text-xl font-bold mob:text-3xl text-primary">
          Edit Contact
        </h1>
      </div>
      <Separator />

      <div className="mx-auto mt-20 max-w-96">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">First Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-accent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-accent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="active" />
                        </FormControl>
                        <FormLabel className="font-normal">Active</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="inactive" />
                        </FormControl>
                        <FormLabel className="font-normal">Inactive</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserContact;
