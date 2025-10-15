import { UserProfile } from "@clerk/clerk-react";

export default function UserProfilePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
      {/* ✅ Clerk’s full profile UI */}
      <UserProfile
        appearance={{
          elements: {
            card: "bg-card text-card-foreground shadow-md border rounded-xl p-6",
            headerTitle: "text-2xl font-bold text-foreground",
            formButtonPrimary:
              "bg-primary text-primary-foreground hover:bg-primary/90",
          },
        }}
        path="/profile"
        routing="path"
      />
    </div>
  );
}
