<?php /* Template Name: Home */ get_header(); ?>
<main class="home-page">
	<?php while (have_posts()) : the_post(); ?>
	
		<section class="mission-hero-section hero-section background-image-section"		
		  <?php 
		  	$image = get_field('mission_hero_image'); 
		  	$size = 'large'; 
		  	$thumb = $image['sizes'][ $size ];
		  	if (!empty($image))
		  :?>
		    style='background-image: url("<?php echo $thumb; ?>");'
			<?php endif;?>
		>
			<div class="content c-80-wide">
				<hr>
				<h1><?php the_field('mission_hero_headline');?></h1>
				<hr>
			</div>
		</section>


		<?php get_template_part('partials/_mission-section') ?>
	

		<section class="approach-hero-section hero-section background-image-section"		
		  <?php 
		  	$image = get_field('approach_hero_image'); 
		  	$size = 'large'; 
		  	$thumb = $image['sizes'][ $size ];
		  	if (!empty($image))
		  :?>
		    style='background-image: url("<?php echo $thumb; ?>");'
			<?php endif;?>
		>
			<div class="content c-80-wide">
				<hr>
				<h2><?php the_field('approach_hero_headline');?></h2>
				<hr>
				<div class="button hero-cta">
					<a class="c-block-fill" href="#approach"></a>
					<?php the_field('approach_hero_cta');?>
				</div>
			</div>
		</section>

		<?php get_template_part('partials/_approach-section') ?>

		<section class="talent-hero-section hero-section background-image-section"		
		  <?php 
		  	$image = get_field('talent_hero_image'); 
		  	$size = 'large'; 
		  	$thumb = $image['sizes'][ $size ];
		  	if (!empty($image))
		  :?>
		    style='background-image: url("<?php echo $thumb; ?>");'
			<?php endif;?>
		>
			<div class="content c-80-wide">
				<hr>
				<h2><?php the_field('talent_hero_headline');?></h2>
				<hr>
			</div>
		</section>

		<?php get_template_part('partials/_talent-section') ?>
		<?php get_template_part('partials/_advisors-section') ?>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
