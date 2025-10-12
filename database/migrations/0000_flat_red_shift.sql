CREATE TABLE "restaurant_menu_items" (
	"currency" varchar(3) DEFAULT 'USD',
	"description" text NOT NULL,
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"image_url" varchar(1024),
	"menu_id" uuid NOT NULL,
	"name" varchar(256) NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"restaurant_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "restaurant_menus" (
	"description" text,
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"restaurant_id" uuid NOT NULL,
	"title" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "restaurants" (
	"availability" json DEFAULT '[]'::json,
	"description" text,
	"gallery" json DEFAULT '[]'::json,
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"location" "point" NOT NULL,
	"logo_url" varchar(1024) NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "restaurant_menu_items" ADD CONSTRAINT "restaurant_menu_items_menu_id_restaurant_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."restaurant_menus"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "restaurant_menu_items" ADD CONSTRAINT "restaurant_menu_items_restaurant_id_restaurants_id_fk" FOREIGN KEY ("restaurant_id") REFERENCES "public"."restaurants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "restaurant_menus" ADD CONSTRAINT "restaurant_menus_restaurant_id_restaurants_id_fk" FOREIGN KEY ("restaurant_id") REFERENCES "public"."restaurants"("id") ON DELETE cascade ON UPDATE cascade;